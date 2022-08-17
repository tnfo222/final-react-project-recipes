import { createSlice } from "@reduxjs/toolkit";
import data from "../data";
const initialState = data;

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    addRecipe: (state) => {
      console.log("add recipe");
      return state;
    },
    deleteRecipe: (state) => {
      console.log("delete recipe");
      return state;
    },
    updateRecipe: (state, action) => {
      console.log("update recipe");
      return state;
    },
    deleteAllRecipes: (state, action) => {
      console.log("delete all recipe");
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addRecipe, deleteRecipe, updateRecipe, deleteAllRecipes } =
  recipeSlice.actions;

export default recipeSlice.reducer;
