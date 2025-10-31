import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, ActivityIndicator, View } from 'react-native';
import { 
  ArrowRight,
  Check,
  Plus,
  Trash2,
  Edit,
  Save,
  X,
  LucideIcon
} from 'lucide-react-native';
import theme from '../../styles/theme';

type ButtonSize = 'small' | 'medium' | 'large' | 'long small' | 'long medium' | 'long large';
type ButtonVariant = 'primary' | 'secondary';
type IconName = 'arrow-right' | 'check' | 'plus' | 'trash' | 'edit' | 'save' | 'close';

interface StylizedButtonProps {
  text?: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode | IconName;
  rightIcon?: React.ReactNode | IconName;
  topIcon?: React.ReactNode | IconName;
  bottomIcon?: React.ReactNode | IconName;
  iconColor?: string;
  iconSize?: number;
  borderRadius?: number;
  width?: number | string;
  height?: number | string;
  gap?: number | string;
  disabled?: boolean;
  loading?: boolean;
  underline?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function StylizedButton({
  text = 'Botão',
  onPress,
  variant = 'primary',
  size = 'medium',
  leftIcon,
  rightIcon,
  topIcon,
  bottomIcon,
  iconColor,
  iconSize,
  borderRadius = 4,
  width,
  height,
  gap,
  disabled = false,
  loading = false,
  fullWidth = false,
  underline = false,
  style,
  textStyle,
}: StylizedButtonProps) {
  
  // Helper function to render icon
  const renderIcon = (icon: React.ReactNode | IconName, defaultSize: number) => {
    if (typeof icon === 'string') {
      const iconMap: Record<IconName, LucideIcon> = {
        'arrow-right': ArrowRight,
        'check': Check,
        'plus': Plus,
        'trash': Trash2,
        'edit': Edit,
        'save': Save,
        'close': X,
      };
      
      const IconComponent = iconMap[icon as IconName];
      const finalIconColor = iconColor || (variant === 'primary' ? '#FFFFFF' : '#283B7D');
      const finalIconSize = iconSize || defaultSize;
      
      return <IconComponent size={finalIconSize} color={finalIconColor} />;
    }
    return icon;
  };

  // Get size-specific styles
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          container: styles.smallContainer,
          text: styles.smallText,
          iconSize: 16,
        };
      case 'large':
        return {
          container: styles.largeContainer,
          text: styles.largeText,
          iconSize: 22,
        };
      case 'long small':
        return {
          container: styles.longSmallContainer,
          text: styles.smallText,
          iconSize: 16,
        };
      
      case 'long medium':
        return {
          container: styles.longMediumContainer,
          text: styles.mediumText,
          iconSize: 18,
        };
      
      case 'long large':
        return {
          container: styles.longLargeContainer,
          text: styles.largeText,
          iconSize: 22,
        };

      default:
        return {
          container: styles.mediumContainer,
          text: styles.mediumText,
          iconSize: 18,
        };
    }
  };

  const sizeStyles = getSizeStyles();
  const finalIconColor = iconColor || (variant === 'primary' ? '#FFFFFF' : '#283B7D');
  
  // Determine if button should be vertical (has top or bottom icons)
  const isVertical = !!(topIcon || bottomIcon);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
      style={[
        styles.button,
        variant === 'primary' ? styles.primaryButton : styles.secondaryButton,
        sizeStyles.container,
        fullWidth && styles.fullWidth,
        (disabled || loading) && styles.disabled,
        isVertical && styles.verticalButton,
        { borderRadius },
        width !== undefined && ({ width } as ViewStyle),
        height !== undefined && ({ height } as ViewStyle),
        height !== undefined && ({ height } as ViewStyle),
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={finalIconColor} size="small" />
      ) : (
        <View style={[styles.content, isVertical && styles.verticalContent]}>
          {topIcon && (
            <View style={styles.iconTop}>
              {renderIcon(topIcon, sizeStyles.iconSize)}
            </View>
          )}
          
          <View style={styles.horizontalContent}>
            {leftIcon && (
              <View style={styles.iconLeft}>
                {renderIcon(leftIcon, sizeStyles.iconSize)}
              </View>
            )}
            
            <Text
              style={[
                styles.text,
                variant === 'primary' ? styles.primaryText : styles.secondaryText,
                sizeStyles.text,
                underline && styles.underlineText,
                textStyle,
              ]}
            >
              {text}
            </Text>
            
            {rightIcon && (
              <View style={styles.iconRight}>
                {renderIcon(rightIcon, sizeStyles.iconSize)}
              </View>
            )}
          </View>
          
          {bottomIcon && (
            <View style={styles.iconBottom}>
              {renderIcon(bottomIcon, sizeStyles.iconSize)}
            </View>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalContent: {
    flexDirection: 'column',
  },
  horizontalContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalButton: {
    paddingVertical: 16,
  },
  // Variants
  primaryButton: {
    backgroundColor: '#131E46',
  },
  secondaryButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#131E46',
  },
  // Sizes
  smallContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  mediumContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  largeContainer: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  // Long sizes
  longSmallContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  longMediumContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  longLargeContainer: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  // Text styles
  text: {
    fontFamily: (theme.fonts.families.redHat as string) || undefined,
    fontWeight: '600',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#131E46',
  },
  smallText: {
    fontSize: 12,
  },
  mediumText: {
    fontSize: 14,
  },
  largeText: {
    fontSize: 16,
  },
  // Icons
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  iconTop: {
    marginBottom: 8,
  },
  iconBottom: {
    marginTop: 8,
  },
  // States
  disabled: {
    opacity: 0.5,
  },
  fullWidth: {
    width: '100%',
  },

  underlineText: {
    textDecorationLine: 'underline',
  },
  
});
// Examples:
/*
import { StylizedButton } from './StylizedButton';
import { View } from 'react-native';

function MyScreen() {
  return (
    <View style={{ padding: 20, gap: 16 }}>
      {/* Default button *\/}
      <StylizedButton />

      {/* Primary buttons with text *\/}
      <StylizedButton text="Entrar" onPress={() => console.log('Login')} />
      
      <StylizedButton 
        text="Salvar" 
        leftIcon="save"
        onPress={() => console.log('Save')} 
      />

      <StylizedButton 
        text="Continuar" 
        rightIcon="arrow-right"
        onPress={() => console.log('Continue')} 
      />

      {/* Secondary variant *\/}
      <StylizedButton 
        text="Cancelar" 
        variant="secondary"
        onPress={() => console.log('Cancel')} 
      />

      {/* Different sizes *\/}
      <StylizedButton 
        text="Pequeno" 
        size="small"
      />

      <StylizedButton 
        text="Médio" 
        size="medium"
      />

      <StylizedButton 
        text="Grande" 
        size="large"
      />

      {/* With icons *\/}
      <StylizedButton 
        text="Adicionar" 
        leftIcon="plus"
        variant="secondary"
      />

      <StylizedButton 
        text="Deletar" 
        leftIcon="trash"
        variant="secondary"
      />

      {/* Vertical layout with top/bottom icons *\/}
      <StylizedButton 
        text="Upload" 
        topIcon="plus"
      />

      <StylizedButton 
        text="Download" 
        bottomIcon="arrow-right"
        variant="secondary"
      />

      <StylizedButton 
        text="Success" 
        topIcon="check"
        bottomIcon="arrow-right"
      />

      {/* Loading state *\/}
      <StylizedButton 
        text="Carregando..." 
        loading={true}
      />

      {/* Disabled *\/}
      <StylizedButton 
        text="Desabilitado" 
        disabled={true}
      />

      {/* Full width *\/}
      <StylizedButton 
        text="Entrar" 
        fullWidth
      />

      {/* Custom styles *\/}
      <StylizedButton 
        text="Custom"
        style={{ backgroundColor: '#EF4444' }}
        textStyle={{ fontSize: 18, fontWeight: 'bold' }}
      />

      {/* Custom border radius *\/}
      <StylizedButton 
        text="Rounded"
        borderRadius={20}
      />

      <StylizedButton 
        text="Square"
        borderRadius={0}
      />

      <StylizedButton 
        text="Pill Shape"
        borderRadius={50}
      />
    </View>
  );
}
*/