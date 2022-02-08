import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Categories from './src/components/Categories';

// import BookPage from './src/components/BookPage';
import Category from './src/components/Category';

export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      {/* <BookPage
        author={"Charles D."}
        image={"https://picsum.photos/60/90"}
        description={"Lorem Ipsum"}
        url={"https://www.amazon.com.mx/"}
      /> */}
      <Category />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
