import 'package:flutter/material.dart';
import 'package:shopapp/theme.dart';

import 'Loginpage.dart';

void main() {
  runApp(const store());
}

class store extends StatelessWidget {
  const store({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Fresh-Buyer',
      theme: appTheme(),
      home: const MyLogin(),
    );
  }
}
