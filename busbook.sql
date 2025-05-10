-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3310
-- Generation Time: Feb 16, 2025 at 04:17 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `busbook`
--

-- --------------------------------------------------------

--
-- Table structure for table `busbook`
--

CREATE TABLE `busbook` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `from` varchar(200) NOT NULL,
  `to` varchar(200) NOT NULL,
  `date` varchar(200) NOT NULL,
  `bustype` varchar(200) NOT NULL,
  `tickets` varchar(200) NOT NULL,
  `price` varchar(200) NOT NULL,
  `payment` varchar(200) NOT NULL,
  `status` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `busbook`
--

INSERT INTO `busbook` (`id`, `name`, `phone`, `email`, `from`, `to`, `date`, `bustype`, `tickets`, `price`, `payment`, `status`) VALUES
(1, 'akshu', '6380134916', 'akshu@gmail.com', 'goa', 'chennai', '23-10-2025', 'sleeper', '1', '450', 'online', 'Approved'),
(2, 'haris', '6380134916', 'haric@gmail.com', 'chennai', 'goa', '23-5-2025', 'nonac', '3', '890', 'online', 'pending'),
(3, 'ganesh', '6380134916', 'akshu@gmail.com', 'goa', 'chennai', '23/10/2025', 'sleeper', '2', '450', 'online', 'confirmed'),
(5, 'subha', '6380134916', 'subha@gmail.com', 'CHENNAI', 'GOA', '2025-02-12', 'Non-AC', '2', '1700', 'Credit Card', 'Approved');

-- --------------------------------------------------------

--
-- Table structure for table `busimg`
--

CREATE TABLE `busimg` (
  `id` int(11) NOT NULL,
  `bus_name` varchar(200) NOT NULL,
  `from` varchar(200) NOT NULL,
  `to` varchar(200) NOT NULL,
  `date` varchar(100) NOT NULL,
  `bus_type` varchar(200) NOT NULL,
  `price` varchar(200) NOT NULL,
  `file` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `busimg`
--

INSERT INTO `busimg` (`id`, `bus_name`, `from`, `to`, `date`, `bus_type`, `price`, `file`) VALUES
(1, 'KPN TRAVELS', 'CHENNAI', 'GOA', '23-5-2025', 'AC', '850', '../upload/67a9cc2c3d317-buses.jpg'),
(2, 'RATHIMEENA TRAVELS', 'MADURAI', 'TRICHY', '30-5-2025', 'AC', '590', '../upload/67a9dd82877a0-bu.jpg'),
(3, 'SKY TRAVELS', 'COIMBATORE', 'KUMBAKONAM', '01-2-2025', 'AC', '1200', '../upload/67a9ddc290cbb-bus4.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`username`, `email`, `password`) VALUES
('Akshaya', 'akshu@gmail.com', '123456'),
('', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `busbook`
--
ALTER TABLE `busbook`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `busimg`
--
ALTER TABLE `busimg`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `busbook`
--
ALTER TABLE `busbook`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `busimg`
--
ALTER TABLE `busimg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
