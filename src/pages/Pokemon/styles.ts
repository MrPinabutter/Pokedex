import { StyleSheet } from "react-native"
import { colors } from "../../styles/colors"
import { fonts } from "../../styles/fonts"

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: colors.blueLight
  },

  header: {
    width: '100%',
    height: 400,
    backgroundColor: colors.blueDark,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100
  },

  headerTextName: {
    color: colors.white,
    fontFamily: fonts.heading,
    fontSize: 32
  },
  
  headerTextId: {
    color: colors.gray,
    fontFamily: fonts.heading,
    fontSize: 18
  },

  infoCard: {
    width: '80%',
    height: 380,
    borderRadius: 36,
    borderWidth: 5,
    backgroundColor: colors.brownPrimary,
    borderColor: colors.brownSecondary,
    marginTop: -80,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 40
  },

  infoTitle: {
    width: '80%',
    textAlign: 'center',
    color: colors.white,
    fontSize: 24,
    marginTop: 20,
    fontFamily: fonts.heading
  },

  infoText: {
    width: '80%',
    color: colors.headging,
    fontSize: 18,
    fontFamily: fonts.bodyBold
  }

})