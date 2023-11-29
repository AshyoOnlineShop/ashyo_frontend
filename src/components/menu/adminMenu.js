import { mdiPackage } from "@mdi/js";
import { mdiAccountCogOutline } from "@mdi/js";

export const adminMenu = [
  {
    path: "/products",
    label: "Products",
    name: "products",
    icon: mdiPackage,
  },

  {
    path: "/admin-profile",
    label: "Profile",
    name: "Profile",
    icon: mdiAccountCogOutline,
  },
];
