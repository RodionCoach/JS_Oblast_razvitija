import React, {Component} from 'react';

class Price extends Component{
    constructor(props){ //для управления жизненными циклами
        super(props);
        this.state = {count: 1};
        this.increaseCount = this.increaseCount.bind(this);
    }

    componentDidMount(){
        setTimeout(this.increaseCount, 3000); //как только отрендериться выполниться функция и ещё раз отрендериться
    }
    increaseCount(){
        this.setState(prevState => ({count: ++prevState.count})); //prevState весь объект состояние, берем остояние из предыдущего состояния и меняем его  ++prevState.count
    }
    render() {
        return <h1>Price page with count (this.state.count)</h1>
    }
}