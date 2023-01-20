import { StyleSheet } from 'react-native';
import {
    Margin,
    Padding,
    Color,
    FontSize,
    FontFamily,
    Border,
} from "../../GlobalStyles";

export default StyleSheet.create({
    mt4: {
        marginTop: Margin.m_3xs,
    },
    ml16: {
        marginLeft: Margin.m_lg,
    },
    mt15: {
        marginTop: Margin.m_md,
    },
    myHomeScrollViewContent: {
        flexDirection: "column",
    },
    mt8: {
        marginTop: Margin.m_2xs,
    },
    mycontainerSpaceBlock: {
        paddingVertical: Padding.p_2xs,
        alignSelf: "stretch",
        overflow: "hidden",
    },
    topAppBarFlexBox: {
        backgroundColor: Color.m3ReadOnlyLightSurface3,
        flexDirection: "row",
        alignSelf: "stretch",
        overflow: "hidden",
        // backgroundColor: 'yellow',
    },
    darkLayout: {
        width: 164,
        alignItems: "center",
    },
    baseFlexBox: {
        justifyContent: "center",
        alignItems: "center",
    },
    labelTypo: {
        textAlign: "center",
        lineHeight: 16,
        letterSpacing: 1,
        fontSize: FontSize.size_2xs,
        width: 103,
        fontWeight: "500",
        fontFamily: FontFamily.m3HeadlineSmall1,
    },
    headline: {
        fontSize: FontSize.m3TitleLarge_size,
        lineHeight: 28,
        display: "flex",
        // width: 342,
        textAlign: "left",
        color: Color.m3ReadOnlyDarkSurface21,
        fontFamily: FontFamily.m3HeadlineSmall1,
        alignItems: "center",
        alignSelf: "stretch",
        // backgroundColor: 'red',
    },
    icon: {
        height: "100%",
        width: "100%",
    },
    trailingIcon: {
        width: 36,
        height: 36,
    },
    topAppBar: {
        justifyContent: "space-between",
    },
    header: {
        fontSize: FontSize.size_base,
        lineHeight: 24,
        fontWeight: "500",
        letterSpacing: 0,
        textAlign: "left",
        color: Color.m3ReadOnlyDarkSurface21,
        fontFamily: FontFamily.m3HeadlineSmall1,
        alignSelf: "stretch",
    },
    subhead: {
        fontSize: FontSize.m3LabelLarge_size,
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: "left",
        color: Color.m3ReadOnlyDarkSurface21,
        fontFamily: FontFamily.m3HeadlineSmall1,
        alignSelf: "stretch",
    },
    text: {
        flex: 1,
    },
    content: {
        paddingHorizontal: Padding.p_2xs,
        paddingVertical: 0,
        alignItems: "center",
        flexDirection: "row",
        flex: 1,
    },
    inactiveOrderIcon: {
        width: 25,
        height: 25,
    },
    inactiveOrder: {
        backgroundColor: Color.gray_400,
        padding: Padding.p_2xl,
        flexDirection: "row",
    },
    inactiveOrderWrapper: {
        backgroundColor: Color.gray_300,
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "row",
        overflow: "hidden",
    },
    horizontalCard: {
        borderRadius: Border.br_sm,
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 1,
        alignItems: "center",
    },
    myhome: {
        alignSelf: "stretch",
        overflow: "hidden",
        flex: 1,
    },
    mycontainer: {
        height: 341,
        paddingHorizontal: Padding.p_2xl,
        alignItems: "center",
    },
    home: {
        backgroundColor: Color.m3White,
        overflow: "hidden",
        width: "100%",
        flex: 1,
    },
});
