import dynamic from "next/dynamic";

export const Card = dynamic(
  () => import("@material-tailwind/react").then((mod) => mod.Card),
  { ssr: false }
);

export const CardHeader = dynamic(
  () => import("@material-tailwind/react").then((mod) => mod.CardHeader),
  { ssr: false }
);

export const CardBody = dynamic(
  () => import("@material-tailwind/react").then((mod) => mod.CardBody),
  { ssr: false }
);

export const Typography = dynamic(
  () => import("@material-tailwind/react").then((mod) => mod.Typography),
  { ssr: false }
);

export const Avatar = dynamic(
  () => import("@material-tailwind/react").then((mod) => mod.Avatar),
  { ssr: false }
);
