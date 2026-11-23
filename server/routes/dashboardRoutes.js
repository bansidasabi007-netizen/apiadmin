
import express from "express";
import User from "../models/User.js";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/stats", async (req, res) => {
  try {
    const [
      totalUsers,
      activeUsers,
      totalProducts,
      activeProducts,
      products,
      recentUsers,
      recentProducts
    ] = await Promise.all([
      User.countDocuments(),
      User.countDocuments({ status: "Active" }),
      Product.countDocuments(),
      Product.countDocuments({ status: "Active" }),
      Product.find(),
      User.find().sort({ createdAt: -1 }).limit(5),
      Product.find().sort({ createdAt: -1 }).limit(5)
    ]);

    const totalInventoryValue = products.reduce(
      (total, product) =>
        total + (Number(product.price) * Number(product.stock)),
      0
    );

    const categoryMap = {};

    products.forEach((product) => {
      const category = product.category || "Other";
      categoryMap[category] = (categoryMap[category] || 0) + 1;
    });

    const categories = Object.entries(categoryMap).map(
      ([name, count]) => ({ name, count })
    );

    res.json({
      totalUsers,
      activeUsers,
      totalProducts,
      activeProducts,
      totalInventoryValue,
      categories,
      recentUsers,
      recentProducts
    });
  } catch (error) {
    res.status(500).json({
      message: "Dashboard data fetch failed",
      error: error.message
    });
  }
});

export default router;
