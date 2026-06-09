import { relations } from "drizzle-orm/relations";
import { bitebytesRecipes, extendedIngredients, likedRecipes, bitebytesUser, mealPlanning, requiredIngredients, savedRecipes, userIngredientList } from "./schema";

export const extendedIngredientsRelations = relations(extendedIngredients, ({one, many}) => ({
	bitebytesRecipe: one(bitebytesRecipes, {
		fields: [extendedIngredients.recipeId],
		references: [bitebytesRecipes.id]
	}),
	requiredIngredients: many(requiredIngredients),
}));

export const bitebytesRecipesRelations = relations(bitebytesRecipes, ({many}) => ({
	extendedIngredients: many(extendedIngredients),
	likedRecipes: many(likedRecipes),
	mealPlannings: many(mealPlanning),
	requiredIngredients: many(requiredIngredients),
	savedRecipes: many(savedRecipes),
}));

export const likedRecipesRelations = relations(likedRecipes, ({one}) => ({
	bitebytesRecipe: one(bitebytesRecipes, {
		fields: [likedRecipes.recipeId],
		references: [bitebytesRecipes.id]
	}),
	bitebytesUser: one(bitebytesUser, {
		fields: [likedRecipes.userId],
		references: [bitebytesUser.id]
	}),
}));

export const bitebytesUserRelations = relations(bitebytesUser, ({many}) => ({
	likedRecipes: many(likedRecipes),
	mealPlannings: many(mealPlanning),
	requiredIngredients: many(requiredIngredients),
	savedRecipes: many(savedRecipes),
	userIngredientLists: many(userIngredientList),
}));

export const mealPlanningRelations = relations(mealPlanning, ({one}) => ({
	bitebytesRecipe: one(bitebytesRecipes, {
		fields: [mealPlanning.recipeId],
		references: [bitebytesRecipes.id]
	}),
	bitebytesUser: one(bitebytesUser, {
		fields: [mealPlanning.userId],
		references: [bitebytesUser.id]
	}),
}));

export const requiredIngredientsRelations = relations(requiredIngredients, ({one}) => ({
	bitebytesRecipe: one(bitebytesRecipes, {
		fields: [requiredIngredients.recipeId],
		references: [bitebytesRecipes.id]
	}),
	bitebytesUser: one(bitebytesUser, {
		fields: [requiredIngredients.userId],
		references: [bitebytesUser.id]
	}),
	extendedIngredient: one(extendedIngredients, {
		fields: [requiredIngredients.uniqueIngredientId],
		references: [extendedIngredients.uniqueId]
	}),
}));

export const savedRecipesRelations = relations(savedRecipes, ({one}) => ({
	bitebytesRecipe: one(bitebytesRecipes, {
		fields: [savedRecipes.recipeId],
		references: [bitebytesRecipes.id]
	}),
	bitebytesUser: one(bitebytesUser, {
		fields: [savedRecipes.userId],
		references: [bitebytesUser.id]
	}),
}));

export const userIngredientListRelations = relations(userIngredientList, ({one}) => ({
	bitebytesUser: one(bitebytesUser, {
		fields: [userIngredientList.userId],
		references: [bitebytesUser.id]
	}),
}));