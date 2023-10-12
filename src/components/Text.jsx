import {Text as NativeText, StyleSheet} from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.myPink,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    colorTextSecondary: {
        color: theme.colors.myBlue,
    },
    colorPrimary: {
        color: theme.colors.myGreen
    },
    colorTextPrimary: {
        color: theme.colors.myPink
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading,
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    },
})

const Text = ({color, fontSize, fontWeight, style, ...props}) => {
    const textStyle = [
        styles.text,
        color === 'textSecondary' && styles.colorTextSecondary, // blue
        color === 'primary' && styles.colorPrimary, // green
        color === 'textPrimary' && styles.colorTextPrimary, // pink
        fontSize === 'subheading' && styles.fontSizeSubheading,
        fontWeight === 'bold' && styles.fontWeightBold,
        style,
    ]
    // console.log('textStyle:', textStyle)
    return <NativeText style={textStyle} {...props} />
}

export default Text;