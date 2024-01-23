import { boards } from '../api/boards'

export const useBoardStore = () => {
  
  const startLoadingBoards = () => {
    try {
        
        // const { data } = await calendarApi.get('/events');
        // const events = convertEventsToDateEvents( data.eventos );
        // dispatch( onLoadEvents( events ) );

      return boards
    } catch (error) {
      console.log('Error cargando eventos');
      console.log(error)
    }

}

  return {
    startLoadingBoards
  }
}
