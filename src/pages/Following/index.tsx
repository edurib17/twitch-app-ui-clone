import React from 'react'
import {FlatList, View} from 'react-native'
import Title from '../../components/Title'

import Header from '../../components/Header'
import Heading from '../../components/Heading'
import CategoryList from '../../components/CategoryList'
import StreamList from '../../components/StreamList'
import ChanelList from '../../components/ChanelList'

import { Wrapper, Container, Main} from './styles'


//ESSE ARRAY DE ITENS SÃO A PAGINA
 interface Item {
     key: string
     render: () => JSX.Element
     isTitle ?: boolean
 }
const Following: React.FC = () => {
   const {data , indices} = React.useMemo(()=>{
        const items: Item[] = [
            {
            key: 'PAGE_HEADING',
            render: () =><Heading> Following </Heading>,
            },
            {
                key: 'FOLLOWED_CATEGORIES',
                render: () => <Title>Followed Categories</Title>,
                isTitle: true,
            },

            { key: 'C1', render: () => <CategoryList />},
            {
                key: 'LIVE_CHANNELS',
                render: () =><Title>Lives Channels</Title>,
                isTitle: true,
            },

            { key: 'C2', render: () => <StreamList/>},

            {
                key: 'CONTINUE_WATCHING',
                render: () =><Title>Continue Watching</Title>,
                isTitle: true,
            },

            { key: 'C3', render: () => <StreamList />},

            {
                key: 'OFFLINE CHANNELS',
                render: () =><Title>Offilne Channels</Title>,
                isTitle: true,
            },

            { key: 'C4', render: () => <ChanelList />},


            
        ]
        
        // array que contem apenas os indices que sao elementos que sao titulos
        const indices: number[] = []

        items.forEach((item,index) => item.isTitle && indices.push(index))

        return {
            data: items,
            indices,
        }

    }, [])
    return (
        <Wrapper>
        <Container>
            <Header />
            <Main>
                <FlatList
                <Item> 
                data={data}
                renderItem={({ item}) => item.render()}
                keyExtractor={item => item.key}
                stickyHeaderIndices = {indices}
                // efeito de refresh
                onRefresh={() => {}}
                refreshing={false}
                />
            </Main>
        </Container>
        </Wrapper>
    )
}

export default Following