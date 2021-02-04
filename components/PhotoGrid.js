import React from "react";
import { Dimensions, FlatList, Image } from "react-native";
import { formatPhotoUri } from "../api/picsum";

//This component will have 3 props: photos, containing our list of photos,
//numColumns specifying how many columns our FlatList should render,
// and an onEndReached callback to let us know when to load more photos.
export default function PhotoGrid({ photos, numColumns, onEndReached }) {
  //Get the width of the screen
  const { width } = Dimensions.get("window");
  //Divide by the number of columns to know what size of the image to display
  const size = width / numColumns;

  return (
    <FlatList
      data={photos}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      onEndReached={onEndReached}
      renderItem={({ item }) => (
        <Image
          source={{
            width: size,
            height: size,
            uri: formatPhotoUri(item.id, size, size),
          }}
        />
      )}
    />
  );
}
