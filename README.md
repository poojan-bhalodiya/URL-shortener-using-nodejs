# URL shortener using Node.js 
This is a URL Shortener. User can add your URL and give the responce to shortUrl.

### Get Todo request 
```http://localhost:3000/```

### How to run this Project

- Install dependency

```npm i``` 

- Run the Project

```npm run dev```


## Packages

| Name             | Version                                                                |
| ----------------- | ------------------------------------------------------------------ |
| cors | ^2.8.5 |
| dotenv | ^16.4.1 |
| express | ^4.18.2 |
| mongoose | ^8.1.1 |
| nodemon | ^3.0.2 |
| shortid | ^2.2.16 |
| valid-url | ^1.0.9 |


 
## API Reference

#### Get Short URL

``` POST || http://localhost:3000/short ```

add details to get short URL
"originalUrl"

#### Get Redirect original URL

```http://localhost:3000/${shortUrl} ```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `shortUrl`| `string` | **Required**. shortUrl of redirect original URL |

You can add in this api in browser to redirect original URL page.


## Screenshots

### Get ShortURL

![image]()

### GEt redirect to original URL

 ![image](https://res.cloudinary.com/dhntmsget/image/upload/v1706794514/Projects/URL-shortener-using-nodejs/Screen%20Shorts/uvaxklexbdahfr7kbnfURL.png)
