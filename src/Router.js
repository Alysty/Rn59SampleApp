import {createStackNavigator, createAppContainer} from 'react-navigation';
import SearchBooksPage from './screens/SearchBooksPage';
import FullBookView from './screens/FullBookView';
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import MyBooksPage from './screens/MyBooksPage';
import AddBookScreen from './screens/AddBookScreen';
const StackNavigator = createStackNavigator({
  
  'AddBookScreen':{
    screen: AddBookScreen,
    navigationOptions:({navigation}) => {
      return ({
        title: 'Add a Book',
        headerTitleStyle:{
          color: 'white',
          fontSize:30
        }
      })
    }
  },
  'Main':{
    screen: LoginPage,
    navigationOptions:({navigation}) => {
      return ({
        title: 'Login',
        headerTitleStyle:{
          color: 'white',
          fontSize:20
        }
      })
    }
  },
  'MyBooksPage':{
    screen: MyBooksPage,
    navigationOptions:({navigation}) => {
      return ({
        title: 'My books',
        headerTitleStyle:{
          color: 'white',
          fontSize:30
        }
      })
    }
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
  },
  'SearchBooksPage':{
    screen: SearchBooksPage,
    navigationOptions:({navigation}) => {
      return ({
        title: 'Search for books',
        headerTitleStyle:{
          color: 'white',
          fontSize:20
        }
      })
    }
  },
  'RegisterPage':{
    screen: RegisterPage,
    navigationOptions:({navigation}) => {
      return ({
        title: 'Resgister your account',
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
        color:'#CECECE',
        fontSize:30
      },
      headerStyle:{
        backgroundColor: '#353535',
        borderBottomWidth: 0 
      }
      
    }
});

const AppContainer = createAppContainer(StackNavigator)
export default AppContainer;