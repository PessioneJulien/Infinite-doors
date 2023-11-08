import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./context/AuthContext";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user, loading } = useContext(AuthContext);
  useEffect(() => {
    // si l'utilisateur est connecté, on le redirige vers la page d'accueil
    if (user) {
      setIsLoggedIn(true);
    }
  }, [user]);
  return (
    <AuthProvider >
      <NavigationContainer>
        <Tabs isLoggedIn={isLoggedIn} />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
