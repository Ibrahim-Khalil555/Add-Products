import { Card, Button, Space } from "antd";

type ProductCardProps = {
  id: number;
  name: string;
  sku: string;
  price: number;
  stock_quantity: number;
  onEdit: () => void;
  onDelete: () => void;
};

export default function ProductCard({
  name,
  sku,
  price,
  stock_quantity,
  onEdit,
  onDelete,
}: ProductCardProps) {
  return (
    <Card
      title={name}
      style={{ width: 250, margin: 10 }}
      extra={
        <Space>
          <Button type="link" onClick={onEdit}>
            Edit
          </Button>
          <Button danger type="link" onClick={onDelete}>
            Delete
          </Button>
        </Space>
      }
    >
      <p>SKU: {sku}</p>
      <p>Price: {price}</p>
      <p>Stock: {stock_quantity}</p>
    </Card>
  );
}
