import React from 'react';
import { 
  CalendarDays,
  HandCoins,
  Users,
  Car,
} from 'lucide-react-native';
import { View, Text } from 'react-native';
import theme from '../../styles/theme';

// Navigation items 
const navigationItems = [
  { name: 'Reuniões', href: '/reunioes', icon: CalendarDays },
  { name: 'Gastos', href: '/gastos', icon:  HandCoins },
  { name: 'Convidados', href: '/convidados', icon: Users },
  { name: 'Veículos', href: '/veiculos', icon: Car },
];

// Footer Component
export function NavBarMobile() {
  const [activeItem, setActiveItem] = React.useState('/reunioes'); 

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: `${theme.colors.darkBlue}`,
        zIndex: 50,
      }}
    >
      <View style={{ 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        height: 71,
        }}>
            
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.href;

          return (
            <View
              key={item.href}
              style={{ alignItems: 'center', justifyContent: 'center', minWidth: 60 }}
              onTouchEnd={() => setActiveItem(item.href)}
            >
              <Icon size={25} color="white" />
              {isActive && (
                <Text style={{ color: 'white', fontSize: 10, fontWeight: '600' }}>
                  {item.name}
                </Text>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}