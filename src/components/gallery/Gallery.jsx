import './gallery.scss'
import datas from '../../../public/logements.json'
import Card from '../card/Card'

export default function Gallery() {
    if (!datas || !Array.isArray(datas)) {
        return <div>Error: Invalid data</div>;
    }
    return (
        <main className='home_gallery'>
            {datas.map(data => {

                <Card
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    cover={data.cover}
                />

            })}
        </main>
    )

}
