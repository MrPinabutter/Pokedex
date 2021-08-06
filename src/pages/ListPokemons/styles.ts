import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.blueMedium,
    height: '100%',
  },

  header: {
    width: '100%',
    height: 142,
    backgroundColor: colors.blueDark,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 48,
    justifyContent: 'space-between'
  },

  headerText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.white,
  },

  image: {
    width: 80,
    height: 80,
  },

  item: {
    width: 150,
    height: 130,
    backgroundColor: colors.blueLight,
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginHorizontal: 15,
    marginBottom: 5,
    overflow: 'hidden'
  },

  nameContainer: {
    width: '100%',
    backgroundColor: colors.brownPrimary,
    borderColor: colors.brownSecondary,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15, 
    borderWidth: 4,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },

  name: {
    color: colors.headging,
    fontSize: 16
  },

  scroll: {
    marginHorizontal: 15,
    marginTop: 20
  }
})

export default styles;