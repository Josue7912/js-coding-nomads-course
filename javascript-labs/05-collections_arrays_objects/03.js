/**
 * Below is a two dimensional list of stores. Each store is represented by a
 * sub-list that contains a unique identifier, its name, its state, its location
 * in the city, and its city.
 *
 * Write some code to:
 *
 * 1. Log only the city of each store.
 * 2. Log only the names of stores in state "CA".
 * 3. Log the number of Target stores in total.
 * 4. Log the number of each type of store. I.e. 5 Targets, 10 K-Marts - log
 *    these with a presentation string. I.e. "There are __ K-Marts in total."
 *
 * Depending on how you approach this, you may end up using methods not taught
 * in the course so far, this is ok. If you find it on the web and it makes
 * sense to you, use it! After all, there are many ways to do the same thing in
 * programming, especially in JavaScript, none are inherently wrong! Efficiency
 * shouldn't be your first concern, just get it working first! Clarity and
 * legibility are important though, make it clear what you are doing and produce
 * readable code, you will thank yourself for it later!
 */

stores =  [
    [ '1003CA', 'Appliance Direct', 'CA', 'West', 'Concord' ],
    [ '1003CO', 'Appliance Direct', 'CO', 'South', 'Colorado Springs' ],
    [ '4002CA', 'Target', 'CA', 'West', 'San Jose' ],
    [ '4003CO', 'Target', 'CO', 'South', 'Rio Grande' ],
    [ '1003DE', 'Appliance Direct', 'DE', 'East', 'Wilmington' ],
    [ '1003FL', 'Appliance Direct', 'FL', 'East', 'Orlando' ],
    [ '1003GA', 'Appliance Direct', 'GA', 'East', 'Albany' ],
    [ '1004MD', 'Target', 'MD', 'East', 'Bethesda' ],
    [ '1004MI', 'Target', 'MI', 'North', 'Detriot' ],
    [ '1004NY', 'Target', 'NY', 'East', 'Albany' ],
    [ '1004OH', 'Target', 'OH', 'North', 'Columbus' ],
    [ '2010AZ', 'K-Mart', 'AZ', 'South', 'Flagstaff' ],
    [ '2010CA', 'K-Mart', 'CA', 'West', 'San Francisco' ],
    [ '2010HI', 'K-Mart', 'HI', 'West', 'Hilo' ],
    [ '3001TX', 'Circuit City', 'TX', 'South', 'Dallas' ],
    [ '3002AL', 'Circuit City', 'AL', 'East', 'Montgomery' ],
    [ '2010IL', 'K-Mart', 'IL', 'North', 'Peoria' ],
    [ '2010IN', 'K-Mart', 'IN', 'North', 'Mount Vernon' ],
    [ '2010KS', 'K-Mart', 'KS', 'North', 'Topeka' ],
    [ '2011OH', 'K-Mart', 'OH', 'North', 'Greenville' ],
    [ '2011OK', 'K-Mart', 'OK', 'South', 'Ellis' ],
    [ '1003CT', 'Appliance Direct', 'CT', 'East', 'Bridgeport' ],
    [ '1003DC', 'Appliance Direct', 'DC', 'North', 'Capitol City' ],
    [ '2011TX', 'K-Mart', 'TX', 'South', 'Temple' ],
    [ '2012AR', 'K-Mart', 'CA', 'West', 'Merced' ],
    [ '2021WI', 'Best Buy', 'WI', 'North', 'Kenosha' ],
    [ '2022CA', 'Best Buy', 'CA', 'West', 'Bakersfield' ],
    [ '2022NJ', 'Best Buy', 'NJ', 'East', 'Woodbridge' ],
    [ '2012AZ', 'K-Mart', 'AZ', 'South', 'Tucson' ],
    [ '2012CA', 'K-Mart', 'CA', 'West', 'Burlingame' ],
    [ '2012CO', 'K-Mart', 'CO', 'South', 'Pueblo' ],
    [ '4003GA', 'Target', 'GA', 'East', 'Macon' ],
    [ '4003IL', 'Target', 'IL', 'North', 'Springfield' ],
    [ '2012CT', 'K-Mart', 'CT', 'East', 'Hartford' ],
    [ '2012FL', 'K-Mart', 'FL', 'East', 'Lake Mary' ],
    [ '2012GA', 'K-Mart', 'GA', 'East', 'Valdosta' ],
    [ '2012HI', 'K-Mart', 'HI', 'West', 'Honolulu' ],
    [ '2021DC', 'Best Buy', 'DC', 'North', 'Capitol City' ],
    [ '2021MD', 'Best Buy', 'MD', 'East', 'Columbia' ],
    [ '2023TX', 'Best Buy', 'TX', 'South', 'Forth Worth' ],
    [ '3001NV', 'Circuit City', 'NV', 'West', 'Cold Springs' ],
    [ '3002AR', 'Circuit City', 'CA', 'West', 'Stockton' ],
    [ '3002CT', 'Circuit City', 'CT', 'East', 'Groton' ],
    [ '3002FL', 'Circuit City', 'FL', 'East', 'Ocala' ],
    [ '4002CA', 'Target', 'CA', 'West', 'San Jose' ],
    [ '4003CO', 'Target', 'CO', 'South', 'Rio Grande' ],
    [ '4003IN', 'Target', 'IN', 'North', 'Attica' ],
    [ '4003KY', 'Target', 'KY', 'North', 'Ashland' ]
]