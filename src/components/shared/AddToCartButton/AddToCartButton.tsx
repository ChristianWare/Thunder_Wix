// import styles from "./AddToCartButton.module.css";

import { useAdditemToCart } from "@/hooks/cart";
import { products } from "@wix/stores";
import FalseButton from "../FalseButton/FalseButton";
import { useModal } from "@/context/ModalContext";

interface AddToCartButtonProps {
  product: products.Product;
  selectedOptions: Record<string, string>;
  quantity: number;
}

export default function AddToCartButton({
  product,
  selectedOptions,
  quantity,
  ...props
}: AddToCartButtonProps) {
  const mutation = useAdditemToCart();
  const { setModalOpen } = useModal();

  return (
    <FalseButton
      onClick={() => {
        mutation.mutate({
          product,
          selectedOptions,
          quantity,
        });
        setModalOpen(true);
      }}
      btnType='primary'
      text='Add To Cart'
      {...props}
    />
  );
}
