// Mude aqui para "styled-components/native"
import 'styled-components/native'; 
import theme from './theme';

// Mudei o nome do tipo para ser mais claro, mas o seu 'CustomTheme' também funciona
type ThemeType = typeof theme;

// E mude aqui também para "styled-components/native"
declare module 'styled-components/native' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}