/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import styles from "./ShoppingCartButton.module.css";
import { useModal } from "@/context/ModalContext";

import {
  useCart,
  useRemoveCartItem,
  useUpdateCartItemQuantity,
} from "@/hooks/cart";
import { useCartCheckout } from "@/hooks/checkout";
import { currentCart } from "@wix/ecom";
import Modal from "../Modal/Modal";
import Link from "next/link";
import WixImage from "@/components/WixImage";
import Cart from "../../../../public/icons/cart.svg";
import Trash from "../../../../public/icons/trash.svg";
import FalseButton from "../FalseButton/FalseButton";

interface ShoppingCartButtonProps {
  initialData: currentCart.Cart | null;
  color?: string;
}

export default function ShoppingCartButton({
  initialData,
  color = "",
}: ShoppingCartButtonProps) {
  const { isModalOpen, setModalOpen } = useModal(); // Access modal state

  const cartQuery = useCart(initialData);
  const { startCheckoutFlow } = useCartCheckout();

  const totalQuantity =
    cartQuery.data?.lineItems?.reduce(
      (acc, item) => acc + (item.quantity || 0),
      0
    ) || 0;

  const handleCheckout = async () => {
    try {
      await startCheckoutFlow();
    } catch (error) {
      console.error("Error during checkout flow:", error);
    }
  };

  return (
    <>
      <div className='relative'>
        <button onClick={() => setModalOpen(true)} className={styles.button}>
          <div className={styles.cartParent}>
            <Cart className={`${styles.icon} ${styles[color]}`} />{" "}
            <p className={styles.equals}>=</p>
            <span className={styles.counter}>
              {totalQuantity < 10 ? totalQuantity : "9+"}
            </span>
          </div>
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <div className={styles.modalContent}>
            <div className={styles.topContent}>
              <div className={styles.quantityContainer}>
                <p>My cart</p>
                <div className={styles.quantityBox}>
                  <span className={styles.quantity}>{totalQuantity}</span>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div>
              <ul className={styles.cartList}>
                {cartQuery.data?.lineItems?.map((item) => (
                  <ShoppingCartItem
                    key={item._id}
                    item={item}
                    onProductLinkClicked={() => setModalOpen(false)}
                  />
                ))}
              </ul>
              {cartQuery.isPending && <p>Loading...</p>}
              {cartQuery.error && (
                <p className='text-destructive'>{cartQuery.error.message}</p>
              )}
              {!cartQuery.isPending && !cartQuery.data?.lineItems?.length && (
                <div>
                  <div>
                    <p>Your cart is empty</p>
                    <Link href='/shop' onClick={() => setModalOpen(false)}>
                      Start shopping now
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.modalBottom}>
              <div className='space-y-0.5'>
                <div className={styles.subtotalBox}>
                  <p>Subtotal</p>
                  <p>
                    {/* @ts-expect-error */}
                    {cartQuery.data?.subtotal?.formattedConvertedAmount}
                  </p>
                </div>
                <p>*** Shipping and taxes calculated at checkout</p>
                <div className={styles.btnContainer}>
                  <FalseButton
                    btnType='primary'
                    text='Checkout Not Available'
                    onClick={handleCheckout}
                    disabled={true}
                  />
                  <FalseButton
                    btnType='secondary'
                    text='Keep Shopping'
                    onClick={() => setModalOpen(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

interface LineItemOptions {
  name: string;
  selectedValue: string;
}

interface LineItem extends currentCart.LineItem {
  options?: LineItemOptions[];
}

interface ShoppingCartItemProps {
  item: LineItem; // Use the extended type
  onProductLinkClicked: () => void;
}

function ShoppingCartItem({
  item,
  onProductLinkClicked,
}: ShoppingCartItemProps) {
  const updateQuantityMutation = useUpdateCartItemQuantity();
  const removeItemMutation = useRemoveCartItem();

  const productId = item._id;

  if (!productId) return null;

  const slug = item.url?.split("/").pop();

  const quantityLimitReached =
    !!item.quantity &&
    !!item.availability?.quantityAvailable &&
    item.quantity >= item.availability.quantityAvailable;

  // Variant Map
  // const variantMap: Record<string, { name: string; value: string }> = {
  //   "2c55e14a-6ad8-45e6-afd8-16721cf2edd7": { name: "Select", value: "Single" },
  //   "e04d9d0b-4d2e-4c2e-bd16-56b46aa920d6": {
  //     name: "Select",
  //     value: "Set of 2",
  //   },
  // };

  // Safely access variantId
  // const variantId = item.catalogReference?.options?.variantId ?? "";
  // const variantDetails = variantMap[variantId] || {
  //   name: "Unknown",
  //   value: "Unknown",
  // };

  return (
    <li className={styles.cartListItem}>
      <div className={styles.left}>
        <div className={styles.l1}>
          <Link href={`/shop/${slug}`} onClick={onProductLinkClicked}>
            <WixImage
              mediaIdentifier={item.image}
              width={100}
              height={100}
              alt={item.productName?.translated || "Product image"}
              className={styles.cartImage}
            />
          </Link>
        </div>
        <div className={styles.l2}>
          <Link href={`/shop/${slug}`} className={styles.productName}>
            {item.productName?.translated || "Item"}
          </Link>
          {/* Display variant details */}
          {/* <p className={styles.optionValue}>{variantDetails.value}</p> */}
          <div className={styles.qtyBtnBox}>
            <button
              disabled={item.quantity === 1}
              onClick={() =>
                updateQuantityMutation.mutate({
                  productId,
                  newQuantity: !item.quantity ? 0 : item.quantity - 1,
                })
              }
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              disabled={quantityLimitReached}
              onClick={() =>
                updateQuantityMutation.mutate({
                  productId,
                  newQuantity: !item.quantity ? 1 : item.quantity + 1,
                })
              }
            >
              +
            </button>
          </div>
          {quantityLimitReached && (
            <span className={styles.quantityWarning}>
              Quantity limit reached
            </span>
          )}
        </div>
      </div>
      <div className={styles.right}>
        <p>
          {item.fullPrice && item.fullPrice.amount !== item.price?.amount && (
            <span className={styles.originalPrice}>
              {item.fullPrice.formattedConvertedAmount}
            </span>
          )}
          {item.price?.formattedConvertedAmount}
        </p>
        <button onClick={() => removeItemMutation.mutate(productId)}>
          <Trash className={styles.trashIcon} />
        </button>
      </div>
    </li>
  );
}
