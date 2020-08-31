import {createStackNavigator, createAppContainer} from 'react-navigation';
import SearchBooksPage from './src/screens/SearchBooksPage';
import FullBookView from './src/screens/FullBookView';

const StackNavigator = createStackNavigator({
  'Main':{
    screen: SearchBooksPage
  },
  'FullBookView':{
    screen: FullBookView,
    navigationOptions:({navigation}) => {
      const bookTitle = navigation.state.params.book.volumeInfo.title;
      return ({
        title: 'Book: '+ bookTitle,
        headerTitleStyle:{
          color: 'white',
          fontSize:20
        }
      })
    }
  }
},{
    defaultNavigationOptions:{
      title:'Books',
      headerTitleStyle:{
        color:'white',
        fontSize:30
      },
      headerStyle:{
        backgroundColor: '#262626',
        borderBottomWidth: 0 
      }
      
    }
});

const AppContainer = createAppContainer(StackNavigator)
export default AppContainer;