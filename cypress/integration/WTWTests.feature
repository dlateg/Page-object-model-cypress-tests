Feature: Search for IFR17 and verify and organise the serach results

    @focus
    Scenario: Change Language to English US 
        Given The language is changed to English US on teh homepage 
        When I search for IFRS 17
        And Verify the seacrh page is displayed and order by date
        And Filter the results by Article
        Then Verify each link begins with the correct URL