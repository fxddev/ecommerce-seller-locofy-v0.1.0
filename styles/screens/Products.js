import { StyleSheet } from 'react-native';
import {
    Margin,
    Padding,
    Border,
    FontSize,
    FontFamily,
    Color,
} from "../../GlobalStyles";

export default StyleSheet.create({
    trailingIconOverlay: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "rgba(113, 113, 113, 0.3)",
    },
    trailingIconBg: {
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
    },
    topAppBar: {
        backgroundColor: "#fffbfe",
    },
    topTabContent: {
        flex: 1,
    },
    myfilterToptabs: {
        width: "100%",
    },
    topTabBarStyle: {
        alignSelf: "stretch",
        flexDirection: "row",
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 5,
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: 38,
        zIndex: 1,
    },
    ml16: {
        marginLeft: Margin.m_lg,
    },
    mt15: {
        marginTop: Margin.m_md,
    },
    mt8: {
        marginTop: Margin.m_2xs,
    },
    mt4: {
        marginTop: Margin.m_3xs,
    },
    subheadParentFlexBox: {
        justifyContent: "space-between",
        alignSelf: "stretch",
        flexDirection: "row",
    },
    viewSpaceBlock: {
        paddingHorizontal: Padding.p_2xl,
        paddingVertical: Padding.p_2xs,
        alignSelf: "stretch",
        overflow: "hidden",
    },
    iconLayout: {
        height: "100%",
        width: "100%",
    },
    subheadParentFlexBox1: {
        justifyContent: "space-between",
        alignSelf: "stretch",
    },
    badgesbadgeFlexBox: {
        justifyContent: "flex-end",
        paddingVertical: 0,
        paddingHorizontal: Padding.p_5xs,
        borderRadius: Border.br_xl,
        alignItems: "flex-end",
        overflow: "hidden",
    },
    darkSegment1Layout: {
        height: 80,
        alignItems: "center",
    },
    labelTypo: {
        letterSpacing: 1,
        fontSize: FontSize.size_2xs,
        width: 103,
        textAlign: "center",
        lineHeight: 16,
        fontWeight: "500",
        fontFamily: FontFamily.m3HeadlineSmall1,
    },
    products: {
        backgroundColor: Color.m3White,
        overflow: "hidden",
        width: "100%",
        flex: 1,
    },
});