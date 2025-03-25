import styles from "./NavbarIcons.module.css";
import { getCart } from "@/wix-api/cart";
import { getWixServerClient } from "@/lib/wix-client.server";

import { getLoggedInMember } from "@/wix-api/members";
import ShoppingCartButton from "../../ShoppingCartButton/ShoppingCartButton";
import UserButton from "../../UserButton/UserButton";

export default async function NavbarIcons() {
  const wixClient = await getWixServerClient();
  const [cart, loggedInMember] = await Promise.all([
    getCart(wixClient),
    getLoggedInMember(wixClient),
  ]);

  return (
    <div className={styles.container}>
      <UserButton loggedInMember={loggedInMember} />
      <ShoppingCartButton initialData={cart} />
    </div>
  );
}
