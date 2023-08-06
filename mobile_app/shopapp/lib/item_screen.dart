import 'package:flutter/material.dart';
import 'package:flutter_rating_bar/flutter_rating_bar.dart';

class ItemScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              height: MediaQuery.of(context).size.height / 2,
              width: MediaQuery.of(context).size.width,
              decoration: BoxDecoration(
                color: Color(0xFFD4ECF7),
                borderRadius: BorderRadius.only(
                  bottomLeft: Radius.circular(38),
                  bottomRight: Radius.circular(30),
                ),
              ),
              child: Stack(
                children: [
                  Center(
                    child: Image.asset(
                      "images/mac2.png",
                      height: 250,
                      width: 250,
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 10),
            Padding(
              padding: EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    "Macbook Pro",
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 22,
                    ),
                  ),
                  SizedBox(height: 10),
                  Row(
                    children: [
                      RatingBar.builder(
                        initialRating: 3.5,
                        minRating: 1,
                        direction: Axis.horizontal,
                        allowHalfRating: true,
                        itemCount: 5,
                        itemSize: 25,
                        itemBuilder: (context, _) => Icon(
                          Icons.star,
                          color: Colors.amber,
                        ),
                        onRatingUpdate: (rating) {},
                      ),
                      SizedBox(width: 10),
                      Text("(450)"),
                    ],
                  ),
                  SizedBox(height: 15),
                  Row(
                    children: [
                      Text(
                        "\$450",
                        style: TextStyle(
                          fontSize: 25,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      Text(
                        "\$200",
                        style: TextStyle(
                          color: Colors.black45,
                          decoration: TextDecoration.lineThrough,
                        ),
                      ),
                    ],
                  ),
                  SizedBox(height: 15),
                  Text(
                    "Description",
                    style: TextStyle(
                      fontSize: 16,
                      //textAlign: TextAlign.justify,
                    ),
                  ),
                  SizedBox(height: 10),
                  Text(
                    "The MacBook Pro is a line of Mac laptops made by Apple Inc. Introduced in January 2006, it is the higher-end lineup in the MacBook family, sitting above the consumer-focused MacBook Air. It is currently sold with 13-inch, 14-inch, and 16-inch screens, all using Apple silicon M-series chips.",
                    style: TextStyle(
                      fontSize: 16,
                      //textAlign: TextAlign.justify,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: Container(
        height: 70,
        margin: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            InkWell(
              onTap: () {},
              child: Container(
                height: 60,
                width: MediaQuery.of(context).size.width / 1.5,
                decoration: BoxDecoration(
                  color: Colors.redAccent,
                ),
                child: Center(
                  child: Text(
                    "Add to Cart",
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      color: Colors.white,
                    ),
                  ),
                ),
              ),
            ),
            InkWell(
              onTap: () {},
              child: Container(
                height: 60,
                width: MediaQuery.of(context).size.width / 5,
                decoration: BoxDecoration(
                  color: Color(0xFFD4ECF7),
                ),
                child: Center(
                  child: Icon(
                    Icons.favorite_border_outlined,
                    color: Colors.redAccent,
                    size: 30,
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

// Assuming the ProductImageSlider widget is defined elsewhere in your code.
class ProductImageSlider extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Implement your image slider widget here.
    return Container();
  }
}
