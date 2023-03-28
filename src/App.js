import { Provider } from "react-redux";
import { StyleSheet, View} from "react-native";
import {Provider as PaperProvider, Appbar} from "react-native-paper";

import store from "./store";
import PostList from "./components/PostList/PostList";

const App = () => {
  
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <PaperProvider>

          <Appbar.Header>
            <Appbar.Content title="Tania" />
          </Appbar.Header>

          <PostList />

        </PaperProvider>
      </Provider>
    </View>
  );  
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });


export default App;
