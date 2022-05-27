import axios from "axios";

const URL = "http://localhost:6010";

const convertMonthName = (month: string) => { 
    switch (month) {
        case "januar":
            return "January";
        case "februar":
            return "February";
        case "mars":
            return "March";
        case "april":
            return "April";
        case "mai":
            return "May";
        case "juni":
            return "June";
        case "juli":
            return "July";
        case "august":
            return "August";
        case "september":
            return "September";
        case "oktober":
            return "October";
        case "november":
            return "November";
        case "desember":
            return "December";
    };
}

export const loadCards = async (name: string) => {
    if (name) {
        try {
            const { data } = await axios.get(`${URL}/articles/${name}`);
            if (data) {
                return data.articles.map((article: any) => {
                    const splited = article.date.split(" ");
                    const day = splited[0].substring(0, splited[0].length - 1);
                    const month = convertMonthName(splited[1]);
                    const year = splited[2];
                    const updatedDate = [day, month, year].join(" ");
                    return {
                        ...article,
                        updatedDate: updatedDate
                    };
                });
            }
            return [];
        } catch (error) {
            console.error(error);
        }
    }
};
