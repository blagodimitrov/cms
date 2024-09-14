import { createClient } from "contentful";
import dynamic from "next/dynamic";

// Dynamically import RecipeCard with SSR disabled
const DynamicRecipeCard = dynamic(() => import("../components/RecipeCard"), {
  ssr: false,
});

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "recipe" });

  return {
    props: {
      recipes: res.items,
    },
    revalidate: 1,
  };
}

export default function Recipes({ recipes }) {
  console.log(recipes);

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className="m-5">
          <DynamicRecipeCard key={recipe.sys.id} recipe={recipe} />
        </div>
      ))}

      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 10px -20px;
        }
      `}</style>
    </div>
  );
}
