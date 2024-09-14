"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "./MaterialTailwindComponents";
import { useRouter } from "next/router";

export default function RecipeCard({ recipe }) {
  const router = useRouter();
  const { title, slug, cookingTime, thumbnail, author } = recipe.fields;
  console.log(author);
  return (
    <Card
      onClick={() => router.push(`/recipes/${slug}`)}
      shadow={false}
      className="cursor-pointer relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        style={{ backgroundImage: `url("https:${thumbnail.fields.file.url}")` }}
        className={
          "absolute inset-0 h-full m-0 w-full rounded-none bg-cover bg-center"
        }
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {title}
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          {author ? author[0].fields.name : "Anonymous"}
        </Typography>
        <Avatar
          size="xl"
          variant="circular"
          alt="tania andrew"
          className="border-2 border-white"
          src={
            author
              ? author[0].fields.image
              : `https:${thumbnail.fields.file.url}`
          }
        />
        <div
          className="text-white absolute bottom-0 right-0"
          style={{ width: "100%", padding: "1rem" }}
        >
          🕒{cookingTime} min
        </div>
      </CardBody>
    </Card>
    // <Card
    //   shadow={false}
    //   className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
    // >
    //   <CardHeader
    //     floated={false}
    //     shadow={false}
    //     color="transparent"
    //     className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
    //   >
    //     <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
    //   </CardHeader>
    //   <CardBody className="relative py-14 px-6 md:px-12">
    //     <Typography
    //       variant="h2"
    //       color="white"
    //       className="mb-6 font-medium leading-[1.5]"
    //     >
    //       {title}
    //     </Typography>
    //     <Typography variant="h5" className="mb-4 text-gray-400">
    //       Cooking Time: {cookingTime} minutes
    //     </Typography>
    //     <Avatar
    //       size="xl"
    //       variant="circular"
    //       alt={title}
    //       className="border-2 border-white"
    //       src={
    //         thumbnail?.fields?.file?.url || "https://via.placeholder.com/150"
    //       }
    //     />
    //   </CardBody>
    // </Card>
  );
}
