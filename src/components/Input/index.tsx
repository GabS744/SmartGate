import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps, ViewStyle, TextStyle } from 'react-native';
import theme from '../../styles/theme';
import { Calendar, User, LockKeyhole, Mail, Search } from 'lucide-react-native';

type IconName = 'email' | 'password' | 'search' | 'user' | 'calendar'

interface StylizedInputProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconColor?: string;
  iconSize?: number;
  required?: boolean;
  disabled?: boolean;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  inputStyle?: TextStyle;
  inputContainerStyle?: ViewStyle;
}

export function StylizedInput({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  iconColor = '#6B84A1',
  iconSize = 24,
  required = false,
  disabled = false,
  containerStyle,
  labelStyle,
  inputStyle,
  inputContainerStyle,
  ...textInputProps
}: StylizedInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const renderIcon = (icon: React.ReactNode | IconName) => {
    if (typeof icon === 'string') {
      const iconMap: Record<IconName, any> = {
        email: Mail,
        password: LockKeyhole,
        user: User,
        search: Search,
        calendar: Calendar,
      };
      
      const IconComponent = iconMap[icon as IconName];
      if (!IconComponent) return null;
      return <IconComponent size={iconSize} color={iconColor} />;
    }
    return icon;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={[styles.label, labelStyle]}>
          {label}
          {required && <Text style={styles.required}> *</Text>}
        </Text>
      )}

      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputContainerFocused,
          error ? styles.inputContainerError : undefined,
          disabled && styles.inputContainerDisabled,
          inputContainerStyle,
        ]}
      >
        {leftIcon && <View style={styles.iconContainer}>{renderIcon(leftIcon)}</View>}

        <TextInput
          placeholderTextColor="#90A4AE"
          editable={!disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={[
            styles.input,
            leftIcon ? styles.inputWithLeftIcon : undefined,
            rightIcon ? styles.inputWithRightIcon : undefined,
            inputStyle,
          ]}
          {...textInputProps}
        />

        {rightIcon && <View style={styles.iconContainer}>{renderIcon(rightIcon)}</View>}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}

      {!error && helperText && <Text style={styles.helperText}>{helperText}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    color: '#171F28',
    fontSize: 12,
    marginBottom: 6,
    fontFamily: (theme.fonts.families.redHat as string) || undefined,
    fontWeight: '500',
  },
  required: {
    color: '#EF4444',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#283B7D',
    paddingHorizontal: 10,
    minHeight: 48,
  },
  inputContainerFocused: {
    borderWidth: 3,
    borderColor: '#283B7D',
  },
  inputContainerError: {
    borderColor: '#EF4444',
  },
  inputContainerDisabled: {
    backgroundColor: '#F5F5F5',
    opacity: 0.6,
  },
  input: {
    flex: 1,
    fontSize: 14,
    borderWidth: 0,
    color: theme.colors.black,
    fontFamily: (theme.fonts.families.redHat as string) || undefined,
    paddingVertical: 12,
    // @ts-ignore
    outlineStyle: 'none',
  },
  inputWithLeftIcon: {
    paddingLeft: 8,
  },
  inputWithRightIcon: {
    paddingRight: 8,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  errorText: {
    fontSize: 12,
    color: '#EF4444',
    marginTop: 4,
    fontFamily: (theme.fonts.families.redHat as string) || undefined,
  },
  helperText: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
    fontFamily: (theme.fonts.families.redHat as string) || undefined,
  },
});

// Example:
/*
import { StylizedInput } from './StylizedInput';
import { Ionicons } from '@expo/vector-icons';

function MyForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <StylizedInput
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        leftIcon='email'
        helperText="We'll send a confirmation to this email"
        required
      />

      <StylizedInput
        label="Disabled Input"
        placeholder="This is disabled"
        disabled
      />
    </View>
  );
}
*/