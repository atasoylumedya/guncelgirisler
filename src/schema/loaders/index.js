import DataLoader from "dataloader";
// import Link from "@/models/Link";
import SiteLogo from "@/models/SiteLogo";

const linkLoader = new DataLoader(async (keys) => {
  const siteLogos = await SiteLogo.find({ _id: { $in: keys } });
  return keys.map((key) =>
    siteLogos.find((siteLogo) => siteLogo.id.toString() === key.toString())
  );
});

// const componentLoader = new DataLoader(async (keys) => {
//   const components = await Component.find({ _id: { $in: keys } });
//   return keys.map((key) =>
//     components.find((component) => component.id.toString() === key.toString())
//   );
// });

// const menuLoader = new DataLoader(async (keys) => {
//   const menus = await Menu.find({ _id: { $in: keys } });
//   return keys.map((key) =>
//     menus.find((menu) => menu.id.toString() === key.toString())
//   );
// });

// const menuItemLoader = new DataLoader(async (keys) => {
//   const menuItems = await MenuItem.find({ _id: { $in: keys.flat() } });

//   return keys.map((key) =>
//     key.map((id) => menuItems.find((menuItem) => menuItem.id === id.toString()))
//   );
// });

export const loaders = {
  linkLoader,
};
