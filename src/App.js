import './App.css';
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom'

function App() {
  let priceCard = [
    {
      plan: "Free",
      price: "0",
      description: [
        {
          icon: "faCheck",
          text: "Single User",
          visiblityClass: "text",
          isEnable: true
        },
        {
          icon: "faCheck",
          text: "5GB Storage",
          visiblityClass: "text",
          isEnable: true
        },
        {
          icon: "faCheck",
          text: "Unlimited Public Projects",
          visiblityClass: "text",
          isEnable: true
        },
        {
          icon: "faCheck",
          text: "Community Access",
          visiblityClass: "text",
          isEnable: true
        },
        {
          icon: "faXmark",
          text: "Unlimited Private Projects",
          visiblityClass: "text-muted",
          isEnable: false
        },
        {
          icon: "faXmark",
          text: "Dedicated Phone Support",
          visiblityClass: "text-muted",
          isEnable: false
        },
        {
          icon: "faXmark",
          text: "Free Subdomain",
          visiblityClass: "text-muted",
          isEnable: false
        },
        {
          icon: "faXmark",
          text: "Monthly Status Reports",
          visiblityClass: "text-muted",
          isEnable: false
        }
      ]
    },
    {
      plan: "Plus",
      price: "49",
      description: [
        {
          icon: "faCheck",
          text: "5 Users",
          visiblityClass: "fw-bold text",
          isEnable: true,
          isBold: true
        },
        {
          icon: "faCheck",
          text: "50GB Storage",
          visiblityClass: "text",
          isEnable: true
        },
        {
          icon: "faCheck",
          text: "Unlimited Public Projects",
          visiblityClass: "text",
          isEnable: true
        },
        {
          icon: "faCheck",
          text: "Community Access",
          visiblityClass: "text",
          isEnable: true
        },
        {
          icon: "faCheck",
          text: "Unlimited Private Projects",
          visiblityClass: "text",
          isEnable: true
        },
        {
          icon: "faCheck",
          text: "Dedicated Phone Support",
          visiblityClass: "text",
          isEnable: true
        },
        {
          icon: "faCheck",
          text: "Free Subdomain",
          visiblityClass: "text",
          isEnable: true
        },
        {
          icon: "faXmark",
          text: "Monthly Status Reports",
          visiblityClass: "text-muted",
          isEnable: false
        }
      ]
    },
    {
      plan: "PRO",
      price: "149",
      description: [
        {
          icon: "faCheck",
          text: "Unlimited Users",
          visiblityClass: "fw-bold text",
          isEnable: true,
          isBold: true
        },
        {
          icon: "faCheck",
          text: "150GB Storage",
          visiblityClass: "text",
          isEnable: true
        },
        {
          icon: "faCheck",
          text: "Unlimited Public Projects",
          visiblityClass: "text",
          isEnable: true
        },
        {
          icon: "faCheck",
          text: "Community Access",
          visiblityClass: "text",
          isEnable: true
        },
        {
          icon: "faCheck",
          text: "Unlimited Private Projects",
          visiblityClass: "text",
          isEnable: true
        },
        {
          icon: "faCheck",
          text: "Dedicated Phone Support",
          visiblityClass: "text",
          isEnable: true
        },
        {
          icon: "faCheck",
          text: "Unlimited Free Subdomains",
          visiblityClass: "fw-bold text",
          isEnable: true,
          isBold: true
        },
        {
          icon: "faCheck",
          text: "Monthly Status Reports",
          visiblityClasss: "text",
          isEnable: true
        }
      ]
    }
  ]
  return (<section className="pricing py-5">
    <div className="container">
      <div className="row mt-3">

        {priceCard.map((card) => {
          return <Card card={card}></Card>;
        })}
      </div>
    </div>
  </section>
  );
}

export default App;

