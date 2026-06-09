import { relations } from "drizzle-orm/relations";
import { bitebytesRecipes, requiredIngredients, bitebytesUser, extendedIngredients, savedRecipes, likedRecipes, mealPlanning, userIngredientList } from "./schema";

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

export const bitebytesRecipesRelations = relations(bitebytesRecipes, ({many}) => ({
	requiredIngredients: many(requiredIngredients),
	savedRecipes: many(savedRecipes),
	extendedIngredients: many(extendedIngredients),
	likedRecipes: many(likedRecipes),
	mealPlannings: many(mealPlanning),
}));

export const bitebytesUserRelations = relations(bitebytesUser, ({many}) => ({
	requiredIngredients: many(requiredIngredients),
	savedRecipes: many(savedRecipes),
	likedRecipes: many(likedRecipes),
	mealPlannings: many(mealPlanning),
	userIngredientLists: many(userIngredientList),
}));

export const extendedIngredientsRelations = relations(extendedIngredients, ({one, many}) => ({
	requiredIngredients: many(requiredIngredients),
	bitebytesRecipe: one(bitebytesRecipes, {
		fields: [extendedIngredients.recipeId],
		references: [bitebytesRecipes.id]
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

export const userIngredientListRelations = relations(userIngredientList, ({one}) => ({
	bitebytesUser: one(bitebytesUser, {
		fields: [userIngredientList.userId],
		references: [bitebytesUser.id]
	}),
}));