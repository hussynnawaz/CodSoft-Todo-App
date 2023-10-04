import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(90deg, rgba(48, 16, 255, 1) 0%, rgba(100, 115, 255, 1) 100%)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoApp: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: 520,
    minHeight: 600,
    backgroundColor: '#161a2b',
    alignItems: 'center',
    margin: 128,
    borderRadius: 10,
    paddingBottom: 32,
  },
  h1: {
    margin: 32,
    color: '#fff',
    fontSize: 24,
  },
  complete: {
    textDecorationLine: 'line-through',
    opacity: 0.4,
  },
  todoForm: {
    marginBottom: 32,
  },
  todoInput: {
    padding: 14,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#5d0cff',
    width: 320,
    backgroundColor: 'transparent',
    color: '#fff',
  },
  todoInputPlaceholder: {
    color: '#e2e2e2',
  },
  todoButton: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: 'linear-gradient(90deg, rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100%)',
    color: '#fff',
    textTransform: 'capitalize',
  },
  todoButtonEdit: {
    backgroundColor: 'linear-gradient(90deg, rgba(20, 159, 255, 1) 0%, rgba(17, 122, 255, 1) 100%)',
    padding: 16,
  },
  todoContainer: {
    flexDirection: 'row',
    position: 'relative',
  },
  todoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 4,
    color: '#fff',
    padding: 16,
    borderRadius: 5,
    width: '90%',
  },
  todoRowOdd: {
    backgroundColor: 'linear-gradient(90deg, rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100%)',
  },
  todoRowEven: {
    backgroundColor: 'linear-gradient(90deg, rgba(255, 12, 241, 1) 0%, rgba(250, 0, 135, 1) 100%)',
  },
  todoRowAlt: {
    backgroundColor: 'linear-gradient(90deg, rgba(20, 159, 255, 1) 0%, rgba(17, 122, 255, 1) 100%)',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 24,
    cursor: 'pointer',
  },
  deleteIcon: {
    marginRight: 5,
    color: '#fff',
  },
  editIcon: {
    color: '#fff',
  },
});

export default styles;
