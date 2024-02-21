import {StyleSheet} from 'react-native';

const ourstyle = StyleSheet.create({
  PreviewParent: {
    flex: 1,
    padding: 10,
    backgroundColor: 'green',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 20,
    marginVertical: 20,
  },
  button: {
    backgroundColor: 'oldlace',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: '1%',
    flexBasis: 180,
    borderRadius: 5,
  },
  tiltle: {
    fontSize: 40,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
  touchableButton: {
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
  },
  selectedChild: {
    backgroundColor: 'purple',
  },
  selectedText: {
    color: '#fff',
  },
  selectedChildText: {
    color: 'white',
  },
  box: {
    width: 100,
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  container: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: 'aliceblue',
    padding: 10,
    marginVertical: 20,
  },
  itemColor: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default ourstyle;
