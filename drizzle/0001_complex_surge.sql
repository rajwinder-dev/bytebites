ALTER TABLE "bitebytesRecipes" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "bitebytesUser" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "extendedIngredients" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "likedRecipes" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "mealPlanning" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "requiredIngredients" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "savedRecipes" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "userIngredientList" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "extendedIngredients" ALTER COLUMN "uniqueId" SET MAXVALUE 9223372036854776000;--> statement-breakpoint
ALTER TABLE "extendedIngredients" ALTER COLUMN "uniqueId" SET CACHE 1;--> statement-breakpoint
ALTER TABLE "likedRecipes" ALTER COLUMN "id" SET MAXVALUE 9223372036854776000;--> statement-breakpoint
ALTER TABLE "likedRecipes" ALTER COLUMN "id" SET CACHE 1;--> statement-breakpoint
ALTER TABLE "mealPlanning" ALTER COLUMN "id" SET MAXVALUE 9223372036854776000;--> statement-breakpoint
ALTER TABLE "mealPlanning" ALTER COLUMN "id" SET CACHE 1;--> statement-breakpoint
ALTER TABLE "requiredIngredients" ALTER COLUMN "id" SET MAXVALUE 9223372036854776000;--> statement-breakpoint
ALTER TABLE "requiredIngredients" ALTER COLUMN "id" SET CACHE 1;--> statement-breakpoint
ALTER TABLE "savedRecipes" ALTER COLUMN "id" SET MAXVALUE 9223372036854776000;--> statement-breakpoint
ALTER TABLE "savedRecipes" ALTER COLUMN "id" SET CACHE 1;--> statement-breakpoint
ALTER TABLE "userIngredientList" ALTER COLUMN "id" SET MAXVALUE 9223372036854776000;--> statement-breakpoint
ALTER TABLE "userIngredientList" ALTER COLUMN "id" SET CACHE 1;--> statement-breakpoint
ALTER TABLE "bitebytesUser" ALTER COLUMN "id" SET MAXVALUE 9223372036854776000;