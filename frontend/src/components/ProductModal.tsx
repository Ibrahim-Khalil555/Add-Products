import { Modal, Input, Space } from "antd";

type ProductModalProps = {
  open: boolean;
  onCancel: () => void;
  onSave: () => void;
  formData: {
    name: string;
    sku: string;
    price: number;
    stock_quantity: number;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      sku: string;
      price: number;
      stock_quantity: number;
    }>
  >;
  title: string;
};

export default function ProductModal({
  open,
  onCancel,
  onSave,
  formData,
  setFormData,
  title,
}: ProductModalProps) {
  return (
    <Modal title={title} open={open} onCancel={onCancel} onOk={onSave}>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Input
          className="custom-input"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <Input
          className="custom-input"
          placeholder="SKU"
          value={formData.sku}
          onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
        />
        <Input
          className="custom-input"
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) =>
            setFormData({ ...formData, price: Number(e.target.value) })
          }
        />
        <Input
          className="custom-input"
          type="number"
          placeholder="Stock Quantity"
          value={formData.stock_quantity}
          onChange={(e) =>
            setFormData({ ...formData, stock_quantity: Number(e.target.value) })
          }
        />
      </Space>
    </Modal>
  );
}
