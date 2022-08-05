import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../theme/theme";

export default ({focused,color,size},route) => {
    
        let iconName ;

        if (route.name === 'Home') {

          iconName = focused ? 'home' : 'home-outline'
                        
        }  else if (route.name === 'Profile') {

          iconName = focused ? 'person' : 'person-outline'
                        
        }

        return <Icon name={iconName} color={focused ? colors.onPrimaryContainer : color} size={focused ? 30 : size} />

    }
