"use server";
import { getUserID } from "@/app/_helper/helper";
import { supabase } from "./supabase";

export async function uploadAIimage(buffer: Buffer, imageName: string) {
  const userId = await getUserID();
  if (!userId) throw new Error("You Need to Login");

  const extension = "png";
  const storagePath = `generated/${userId}/${Date.now()}-${imageName}.${extension}`;

  const { data, error } = await supabase.storage
    .from("generatedimages")
    .upload(storagePath, buffer, {
      contentType: "image/png",
      upsert: false,
    });

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  const publicUrl = supabase.storage
    .from("generatedimages")
    .getPublicUrl(storagePath).data.publicUrl;

  return publicUrl;
}
