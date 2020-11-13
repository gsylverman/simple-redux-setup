import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux';
import { getMovies } from './store/actions/index'

function App(props) {
  useEffect(() => {
    props.getMovies()
  }, [])

  return (
    <div>
      <HookComp />
      {/* {
        props.movies ? props.movies.map(item => (
          <div key={item.id}>
            {item.title}
          </div>
        )) :
          null
      } */}
    </div>
  );
}

const HookComp = () => {
  // useDispatch & useSelector
  const movies = useSelector(state => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])
  
  return (
    <div>
      {
        movies ?
          movies.map(item => (
          <div key={item.id}>
            {item.title}
          </div>
        )) :
          null
      }
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ getMovies }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
