package com.example.addashboard;

import static org.hamcrest.Matchers.containsString;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.example.addashboard.controller.AdController;

@SpringBootTest
public class AdControllerTest {

    private MockMvc mockMvc;

    @Test
    public void getAdData() throws Exception {
        mockMvc = MockMvcBuilders.standaloneSetup(new AdController()).build();

        mockMvc.perform(get("/api/ads")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string(containsString("2024-06-01")))  
                .andExpect(content().string(containsString("2024-06-02")));
    }
}
