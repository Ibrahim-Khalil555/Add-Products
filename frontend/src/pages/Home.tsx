import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/product.api";
import { message, Layout } from "antd";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

type Product = {
  id: number;
  name: string;
  sku: string;
  price: number;
  stock_quantity: number;
};

export default function Home() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery<{ data: Product[] }>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    price: 0,
    stock_quantity: 0,
  });
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const createMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setModalOpen(false);
      message.success("Product added successfully!");
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: any }) =>
      updateProduct(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setModalOpen(false);
      setEditingProduct(null);
      message.success("Product updated successfully!");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      message.success("Product deleted successfully!");
    },
  });

  const openAddModal = () => {
    setFormData({ name: "", sku: "", price: 0, stock_quantity: 0 });
    setEditingProduct(null);
    setModalOpen(true);
  };

  const openEditModal = (product: Product) => {
    setFormData({
      name: product.name,
      sku: product.sku,
      price: product.price,
      stock_quantity: product.stock_quantity,
    });
    setEditingProduct(product);
    setModalOpen(true);
  };

  const handleSave = () => {
    if (editingProduct) {
      updateMutation.mutate({ id: editingProduct.id, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh", width: "100vw" }}>
      <Navbar onAddClick={openAddModal} />

      <Layout.Content
        style={{ padding: "20px", width: "100%", backgroundColor: "#f0f2f5" }}
      >
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            Loading...
          </div>
        ) : (
          <>
            <ProductModal
              open={modalOpen}
              onCancel={() => setModalOpen(false)}
              onSave={handleSave}
              formData={formData}
              setFormData={setFormData}
              title={editingProduct ? "Edit Product" : "Add Product"}
            />

            <div
              style={{
                display: "inline-flex",
                flexWrap: "wrap",
                marginTop: 90,
                width: "100%",
              }}
            >
              {data?.data.map((product: Product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  sku={product.sku}
                  price={product.price}
                  stock_quantity={product.stock_quantity}
                  onEdit={() => openEditModal(product)}
                  onDelete={() => deleteMutation.mutate(product.id)}
                />
              ))}
            </div>
          </>
        )}
      </Layout.Content>
    </Layout>
  );
}
