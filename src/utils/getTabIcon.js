import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../theme/theme";

export default ({focused,color,size},route) => {
    
        let iconName ;

        if (route.name === 'FeatureHome') {

          iconName = focused ? 'home' : 'home-outline'
                        
        }
        else if (route.name === 'FeatureExplore') {

          iconName = focused ? 'compass' : 'compass-outline'
                        
        }  else if (route.name === 'FeatureProfile') {

          iconName = focused ? 'person' : 'person-outline'
                        
        }

        return <Icon name={iconName} color={focused ? colors.primary : color} size={focused ? 30 : size} />

    }
