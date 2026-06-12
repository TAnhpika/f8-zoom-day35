import { useState } from "react";
import Button from "../../components/Button";
import styles from "./Buttons.module.scss";

function Buttons() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };
    return (
        <div className={styles.page}>
            <Button>Click me</Button>
            <Button primary>Primary Button</Button>
            <Button href="https://google.com" target="_blank">
                Go to Google
            </Button>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
            <Button bordered>Bordered</Button>
            <Button rounded>Rounded</Button>
            <Button primary rounded>
                Primary Rounded
            </Button>
            <Button onClick={() => alert("Clicked!")}>Click Alert</Button>

            <Button disabled onClick={() => alert("Should not show")}>
                Disabled Button
            </Button>

            <Button loading={loading} primary onClick={handleSubmit}>
                Submit
            </Button>

            <Button primary loading>
                Loading ...
            </Button>

            <Button className={styles.customBtn} primary>
                Custom Styled
            </Button>

            <Button primary>
                <span>📧</span> Send Email
            </Button>
        </div>
    );
}

export default Buttons;
