import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../components/carousel/Carousel";
import Collapse from "../components/collapse/Collapse";
import Host from "../components/host/Host";
import Rate from "../components/rating/Rating";
import Tag from "../components/tag/Tag";

/**
 * Renders the details of a listing.
 * @returns {JSX.Element} The rendered ListingDetails component.
 */
export default function ListingDetails() {
    const routeParams = useParams();
    const navigation = useNavigate();
    const [selectedApartment, setSelectedApartment] = useState(null);

    useEffect(() => {
        /**
         * Fetches the data for the selected apartment.
         * @throws {Error} If the network response is not ok.
         */
        const fetchData = async () => {
            try {
                const response = await fetch('../../public/logements.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);

                const selected = data.find(({ id }) => id === routeParams.id);
                if (!selected) {
                    navigation("/404", { state: { message: "Can't get data" } });
                } else {
                    setSelectedApartment(selected);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [routeParams.id, navigation]);

    const slidePics = selectedApartment && selectedApartment.pictures;
    const tags = selectedApartment && selectedApartment.tags;
    const equipments = selectedApartment && selectedApartment.equipments;
    const equipmentList = selectedApartment && equipments.map((item, index) => (
        <li key={index} className="equipmentListItem">
            {item}
        </li>
    ));

    return (
        selectedApartment && (
            <div key={routeParams.id} className="listing-details-container">
                <Carrousel slides={slidePics} />
                <section className="host-info-container">
                    <div className="title-tags-container">
                        <div className="title-container redFont">
                            <h1>{selectedApartment.title}</h1>
                            <h3>{selectedApartment.location}</h3>
                        </div>
                        <div className="tags-container">
                            {tags.map((tag) => (
                                <Tag key={tag} tag={tag} />
                            ))}
                        </div>
                    </div>
                    <div className="rate-host-container">
                        <div className="host-container redFont">
                            <Host
                                hostName={selectedApartment.host.name}
                                hostPic={selectedApartment.host.picture}
                            />
                        </div>
                        <div className="rate-container">
                            <Rate score={selectedApartment.rating} />
                        </div>
                    </div>
                </section>
                <div className="collapse-details-container">
                    <Collapse
                        aboutTitle="Description"
                        aboutText={selectedApartment.description}
                    />
                    <Collapse aboutTitle="Equipments" aboutText={equipmentList} />
                </div>
            </div>
        )
    );
}