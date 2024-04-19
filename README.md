[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# ReBountiFull

ReBountiFull is a digital platform designed to connect restaurants and grocers with excess food to digital food banks, facilitating the redistribution of surplus food to families in need. This README file provides an overview of the project, how to set it up, and key features.

![image](/screenshot.png)

## Table of Contents

1. [Overview](#overview)
2. [Key Features](#key-features)
3. [Getting Started](#getting-started)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [Support](#support)
7. [License](#license)

## Overview

ReBountiFull aims to address two critical issues: food waste in restaurants and grocers and food insecurity among families in need. The platform allows restaurants and grocers to list surplus food items, and digital food banks can register to receive notifications about available food for distribution. A sophisticated matching algorithm ensures efficient and timely redistribution, minimizing food waste and supporting communities in need.

## Key Features

* Restaurant/Grocer Integration: Restaurants and Grocers can sign up and list excess food items, including prepared meals and perishable goods.
* Digital Food Bank Registration: Food banks can register to receive notifications about available surplus food and specify their acceptance criteria.
* Matching Algorithm: The platform uses a matching algorithm to pair restaurants with surplus food to nearby digital food banks that can accept those items.
* Delivery Coordination: Facilitates coordination of food pickup or delivery between restaurants and food banks, streamlining logistics.
* User-Friendly Interface: Intuitive interface for restaurants, food banks, and volunteers to navigate listings, matches, and deliveries.
* Community Engagement: Encourages community participation through volunteer opportunities for food pickup and delivery.

## Getting Started

To get started with ReBountiFull, follow these steps:

1. **Clone the Repository:** Clone the ReBountiFull repository to your local machine using Git:
```
git clone https://github.com/sareacct91/ReBountiFull
```
2. **Install Dependencies:** Navigate to the project directory and install dependencies using npm:
```
cd RebountiFull
npm run install
```
3. **Configure Environment Variables:** Create a `.env` file in the server directory and configure a session secret:
```
SECRET=<your secret goes here>
```

4. **Seed the database:** Seed the local database using npm:
```
npm run seed
```

5. **Run the Application:** Start the application locally using npm:
```
npm start
```

6. **Access the Application:** Open your web browser and navigate to `http://localhost:3000` to access the ReBountiFull application.

## Contributing

We welcome contributions from the community to enhance and improve ReBountiFull. To contribute, please follow these guidelines:

- Fork the repository and create a new branch for your feature or bug fix.
- Ensure your code adheres to the coding standards and conventions used in the project.
- Submit a pull request with a clear description of your changes and the problem they solve.

## Support

If you encounter any issues or have any questions or suggestions, please don't hesitate to reach out to our support team at support@rebountifull.com. We're here to help!

## License

PropertyPlus Care is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Application Repository
https://github.com/sareacct91/ReBountiFull

## Application Deployed to Heroku
